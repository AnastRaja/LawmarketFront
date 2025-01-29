// src/utils/mergeSignature.js
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const mergeSignatureWithDoc = async (htmlContent, signatureDataUrl, originalFile) => {
  const zip = await JSZip.loadAsync(await originalFile.arrayBuffer());
  const documentXml = await zip.file('word/document.xml').async('string');

  const signatureImageXml = `
    <w:p>
      <w:r>
        <w:drawing>
          <wp:inline>
            <a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
              <a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">
                <pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">
                  <pic:blipFill>
                    <a:blip r:embed="rId1" cstate="print"/>
                  </pic:blipFill>
                </pic:pic>
              </a:graphicData>
            </a:graphic>
          </wp:inline>
        </w:drawing>
      </w:r>
    </w:p>`;

  const updatedDocumentXml = documentXml.replace('</w:body>', `${signatureImageXml}</w:body>`);
  zip.file('word/document.xml', updatedDocumentXml);

  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, 'signed-document.docx');
};
