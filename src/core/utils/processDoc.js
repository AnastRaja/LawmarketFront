// src/utils/processDoc.js
import mammoth from 'mammoth';

export const processDocFile = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const { value } = await mammoth.convertToHtml({ arrayBuffer });
  return value;
};
