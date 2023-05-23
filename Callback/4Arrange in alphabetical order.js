const books = [
    {
        title: "The Great Gatsby",
        author: "Tell ham",
        year : "1999"
    },
    {
        title: "Thor Great Gatsby",
        author: "dr ham",
        year : "1909"
    },
    {
        title: "The eat by",
        author: "Tellam",
        year : "1999"
    },
    {
        title: " Great Gy",
        author: "Dux ham",
        year : "1997"
    },
];

function logTitles(titles) {
    titles.sort()
    console.log(titles.join(","));
}

function extractTitles(books, callback) {
    const titles = books.map((book) => book.title);
    callback(titles)
}

extractTitles(books,logTitles);