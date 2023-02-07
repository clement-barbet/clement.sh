import * as fs from 'fs';
import fm from 'front-matter';
import marked from 'marked';

function getFiles() {
  return fs.
    readdirSync('src/posts', {withFileTypes: true})
    .filter(file => file.name.endsWith(".md"))
    .map(file => file.name)
    .map(filename => filename.replace(/.md$/, '')) // Remove the .md extension
}

function stringToDate(string_date) {
  const [day, month, year] = string_date.split('/')

  console.log(`${day} ${month} ${year}`)

  const date = new Date(year, month - 1, parseInt(day) )
  return date;

}

function dateToFormatedString(date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  console.log(date + " " + date.getDay())
  console.log(months[date.getMonth()] + " " + date.getDay() + ", " + date.getFullYear())
  return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
  // return "Published on " +  months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}

function getPostData(slug) {
  const filepath = `src/posts/${slug}.md` // Get the file path of post
  const file = fs.readFileSync(filepath, 'utf8')
  const file_struct = fm(file) // Parse the markdown file

  const date = stringToDate(file_struct.attributes.date) 
  const formated_date = dateToFormatedString(date)
  const author = file_struct.attributes.author
  const author_job = file_struct.attributes.author_job
  const description = file_struct.attributes.description
  const title = file_struct.attributes.title
  const tags = file_struct.attributes.tags

  /*
    Author
    Author job
    Title
    Description
    Date
    Tags
  */
  return {
      post: {
          slug,
          author,
          author_job,
          date,
          formated_date,
          title,
          description,
          tags
      }
    }

}


export function load() {
    let posts = getFiles()
    return {
      summaries: posts
                    .map((post) => getPostData(post))
                    // .sort((a,b) => a.date - b.date)
    }
}