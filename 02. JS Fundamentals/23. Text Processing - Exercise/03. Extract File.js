function extractFile(str) {

    let fileName = str.split('\\');
    let last = fileName[fileName.length - 1].lastIndexOf('.');

    let fName = fileName[fileName.length - 1].substring(0, last);
    let fExt = fileName[fileName.length - 1].substring(last + 1);

    console.log(`File name: ${fName}`);
    console.log(`File extension: ${fExt}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');