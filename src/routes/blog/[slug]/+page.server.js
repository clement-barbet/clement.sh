import * as fs from 'fs';
import fm from 'front-matter';
import marked from 'marked';
import { error } from '@sveltejs/kit';

// Return all the markdown filename inside the src/posts directory
function getFilenames() {
    return fs
        .readdirSync('src/posts', {withFileTypes: true}) // List the files inside src/posts dir
        .filter(file => file.name.endsWith(".md"))  // Filter the markdown files 
        .map(file => file.name) // Get the filename from the file object
        .map(filename => filename.replace(/.md$/, '')) // Remove the .md extension
}

function getPostData(post_name) {
    const filepath = `src/posts/${post_name}.md` // Get the file path of post
    const file = fs.readFileSync(filepath, 'utf8')
    const file_struct = fm(file) // Parse the markdown file

    const slug = post_name
    const title = file_struct.attributes.title
    const body = marked.parse(file_struct.body)

    return {
        post: {
            title,
            slug,
            body
        }
      }

}

export function load({ params }) {
    
    const file_list = getFilenames() // Get the files name
    const post_name = file_list.find((slug) =>  slug === params.slug) // Try to find the name of the post
    if (!post_name) throw error(404); // If no post found. We return an error not found

    return getPostData(post_name) // Else we return the data of this blog post
}