const docs = result.response.docs;

docs.forEach(doc => {
    console.log(`Name: ${doc.name}`);
    console.log(`Content: ${doc.content}`);
});