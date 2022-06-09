function solve(filePath) {

    let indexStart = filePath.lastIndexOf('\\') + 1;
    let extensionStart = filePath.lastIndexOf('.') + 1;
    let fileNameIndexEnd = extensionStart - 1;

    let fileName = filePath.substring(indexStart, fileNameIndexEnd);
    let fileExtension = filePath.substring(extensionStart);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);




}
solve('C:\\Internal\\training-internal\\Template.pptx');