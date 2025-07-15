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
    return reader.id;
}

function get_reader_by_id(id){
    let reader = data.readers.find(reader => reader.id === id);
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
    if (!reader){ 
        console.log("Reader is not found"); 
        return; 
    }
    Object.assign(reader, {
        name: new_name,
        phone: new_phone,
    });
}

function delete_reader(id) {
    const reader = get_reader_by_id(id);
    if (!reader) {
        console.log("Reader is not found");
        return;
    }
    data.readers = data.readers.filter(reader => reader.id !== id);
    console.log(`Reader "${reader.name}" deleted`);
}

function add_article(title, author, year) { 
    let article = {
        id: generate_id("article#"),
        title,
        author,
        year,
        comments: [],
    };
    data.articles.push(article);
    console.log(`Added article: ${title}`);
    return article.id; 
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
    let article = get_article_by_id(id);  
    if (!article){ 
        console.log("Article is not found"); 
        return; 
    }    
    data.articles = data.articles.filter(article => article.id !== id);
    console.log(`Article "${article.title}" deleted`);
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
    return comment.id;
}

function edit_comment(comment_id, article_id, new_text){
    let article = get_article_by_id(article_id); 
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
        id: article_id, 
        article,
        text: new_text,
    });
    console.log(`Changed comment on ${article.title}`);
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
    let comment = get_comment_by_id(id);  
    let article = comment.article;
    if (!comment){ 
        console.log("Comment is not found"); 
        return; 
    }     
    data.comments = data.comments.filter(comment => comment.id !== id);
    console.log(`Deleted comment on ${article.title}`);
}

function show_all_articles() {
    console.log("\nAll articles:");
    data.articles.forEach(article => {
        if (!article){ 
            console.log("Article is not found"); 
            return; 
        }
        console.log(`"${article.title}" (${article.year}) by ${article.author}`);
    });
    console.log("\n");
}

function show_all_readers() {
    console.log("\nAll readers:");
    data.readers.forEach(reader => {
        if (!reader){ 
            console.log("Reader is not found"); 
            return; 
        }
        console.log(`Name: ${reader.name}, Number: ${reader.phone}`);
    });
    console.log("\n");
}

function show_all_comments(){
    console.log("\nAll comments:");
    data.comments.forEach(comment => {
        if (!comment){ 
            console.log("Reader is not found"); 
            return; 
        }
        console.log(`"${comment.text}" on ${comment.article.title}`);
    });
}

console.log("\n");
let VitaliiID = add_reader("Vitalii", "+380506485587");
let MaxID = add_reader("Max", "+380505769234");
edit_reader(VitaliiID, "John", "+380995416755");
let HannaID = add_reader("Hanna", "+380992048705");
delete_reader(HannaID);
show_all_readers();

let integralsID = add_article("Integral Calculus", "Isaac Newton", 1712);
let jsID = add_article("JavaScript", "Laurence Lars Svekis", 2023);
let cppID = add_article("Programming on C++", "Bern Straustrup", 2023);
delete_article(cppID);
edit_article(integralsID, "Light phenomenon", "Isaac Newton", 1708);
show_all_articles();

let light_commentID = add_comment(integralsID, "Newton was genius");
edit_comment(light_commentID, integralsID, "Newton was a phenomenon");
let js_commentID = add_comment(jsID, "JS is for geniuses");
delete_comment(js_commentID);
show_all_comments();