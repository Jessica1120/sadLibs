import React from 'react'

const ChooseButton = (prop) => {
    console.log(prop.PoemList[0].author)
       return (
           <div>
               {
                   prop.PoemList
                   .filter((author, index, self) =>
                    index === self.findIndex((t) => (
                        t.author === author.author
                    )))
                   .map(author => <button key={author.author}> {author.author} </button>)
               }
           </div>
       )
   

}

export default ChooseButton;