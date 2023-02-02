import React, {useState} from 'react'
import axios from 'axios'

function ImageUpload() {

const [files, setFiles] = useState([]);
const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();

    for(let i=0; i<files.length; i++) {
        data.append('file', files)
    }
    data.append('file', files)

    axios.post('//localhost:5000/upload', data)
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        console.log(err);
    
})}

const onInputChange = (event) => {
    setFiles(event.target.files)
}

  return (
    <div>
        <form onSubmit={onSubmit} action="">
<input type="file"
onChange={onInputChange}
multiple
 />
<input type="submit" value="Upload" />

        </form>
    </div>
  )
}

export default ImageUpload