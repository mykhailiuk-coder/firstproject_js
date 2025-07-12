const data = {
    readers: [],
    articles: [],
    comments: [],
};

function generate_id(prefix){
    return prefix + Math.floor(Math.random() * 1000000); 
}

function add_reader(name, phone) {
    const reader = {
        id: generate_id("reader#"),
        name,
        phone,
    };
    data.readers.push(reader);
    console.log(`Added reader: ${name}`);
}

function get_reader_by_id(id){
    reader = data.readers.find(reader => reader.id === id);
    if (!reader){ 
        console.log("Reader is not found"); 
        return; 
    }
    return reader;
}

function get_reader_by_name(name){
    reader = data.readers.find(reader => reader.name === name);
    if (!reader){ 
        console.log("Reader is not found"); 
        return; 
    }
    return reader;
}

function edit_reader(id, new_name, new_phone){
    let reader = get_reader_by_id(id);
    Object.assign(reader, {
        id,
        new_name,
        new_phone,
    });
    console.log("")
}

function delete_reader(id){
    let reader = get_reader_by_id(id);
    if (!reader){ 
        console.log("Reader is not found"); 
        return; 
    }
    delete reader;
}

function add_article(title, author, year) {
    var article = {
        id: generate_id("article#"),
        title,
        author,
        year,
        comments: [],
    };
    data.articles.push(article);
    console.log(`Added book: ${title}`);
}

function add_article_text(id, text){
    let article = get_article_by_id(id);
    if (!article){ 
        console.log("Article is not found"); 
        return; 
    }
    article.text = text;
}

function edit_article(id, new_title, new_author, new_year){
    let article = get_article_by_id(id);
    article.title = new_title; 
    article.author = new_author; 
    article.year = new_year; 
}

function get_article_by_id(id) {
    let article = data.articles.find(article => article.id === id);
    if (!article){ 
        console.log("Article is not found"); 
        return; 
    }
    return article;
}

function get_article_by_title(title) {
    let article = data.articles.find(article => article.title === title);
    if (!article){ 
        console.log("Article is not found"); 
        return; 
    }
    return article;
}

function delete_article(id){
    let article = data.articles.find(article => article.id === id);  
    if (!article){ 
        console.log("Article is not found"); 
        return; 
    }    
    delete article;
}

function add_comment(article_id, text){
    let article = get_article_by_id(article_id);
    if (!article){ 
        console.log("Article is not found"); 
        return; 
    }
    let comment = {
        id: generate_id("comment#"),
        article,
        text, 
    };
    data.comments.push(comment);
    article.comments.push(comment); 
    console.log(`Added comment on ${article.title}`);
}

function edit_comment(comment_id, new_article_id, new_text){
    let article = get_article_by_id(new_article_id); 
    if (!article){ 
        console.log("Article is not found"); 
        return; 
    }
    let comment = get_comment_by_id(comment_id)
    if (!comment){ 
        console.log("Comment is not found"); 
        return; 
    }
    Object.assign(comment, {
        id: new_article_id, 
        article,
        new_text,
    });
}

function get_comment_by_id(id){
    let comment = data.comments.find(comment => comment.id === id);
    if (!comment){ 
        console.log("Comment is not found"); 
        return; 
    }
    return comment;
}

function get_comment_by_text(text){
    let comment = data.comments.find(comment => comment.text === text);    
    if (!comment){ 
        console.log("Comment is not found"); 
        return; 
    }
    return comment;
}

function delete_comment(id){
    let comment = data.comments.find(comment => comment.id === id);  
    if (!comment){ 
        console.log("Comment is not found"); 
        return; 
    }     
    delete comment;
}

function show_all_articles() {
    console.log("All articles:");
    data.articles.forEach(article => {
        let article = get_article_by_id(data.articles.id);
        if (!article){ 
            console.log("Article is not found"); 
            return; 
        }
        console.log(`"${article.title}" (${article.year}) by ${article.author}\n`);
    });
}

function show_all_readers() {
    console.log("All readers:");
    data.readers.forEach(reader => {
        let reader = get_reader_by_id(data.readers.id);
        if (!reader){ 
            console.log("Reader is not found"); 
            return; 
        }
        console.log(`Name: ${reader.name} Number: ${article.author}\n`);
    });
}