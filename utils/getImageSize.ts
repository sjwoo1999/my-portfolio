import sizeOf from 'image-size';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const sizeOfPromise = promisify(sizeOf);

export const getImageSizes = async (directory: string) => {
  const files = fs.readdirSync(directory);
  const imageSizes: Record<string, { width: number; height: number }> = {}; // 타입을 명시적으로 지정합니다.

  for (const file of files) {
    const filePath = path.join(directory, file);
    try {
      const dimensions = await sizeOfPromise(filePath);
      if (dimensions) {
        imageSizes[file] = {
          width: dimensions.width!,
          height: dimensions.height!,
        };
      }
    } catch (error) {
      console.error(`이미지 크기 가져오기 실패 (${file}):`, error);
    }
  }

  return imageSizes;
};
