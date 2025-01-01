import { useState } from "react";

export default function Input({onset}) {
  const [value, setValue] = useState({
		title: "",
		content: "",
	});
	function handleChange (title, content) {
		setValue(preValue => {
			return {
				...preValue,
				[title]: content,
			}
		})
	}

	function handleMove() {
		onset(value)
		setValue({
			title: "",
			content: ""
		})
	}
  return (
    <div className="input">
      <div className="input-first">
        <input type="text" placeholder="enter title" value={value.title} onChange={(e) => handleChange('title', e.target.value)} name="title" required/>
        <textarea  rows="4" placeholder="enter content" value={value.content} onChange={(e) => handleChange('content', e.target.value)} name="content" required/>
      </div>
      <button  disabled ={value.title.length < 1} onClick={handleMove}>Add</button>
    </div>
  );
}
