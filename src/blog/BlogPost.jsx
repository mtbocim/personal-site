import { useState } from "react";
import siteApi from "../api";
import AlertMsg from "../AlertMsg";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function BlogPost({ token, setLoaded }) {

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        tags: {},
    });

    const [errors, setErrors] = useState([]);

    function handleContentChange(data) {
        setFormData((prevData) => ({ ...prevData, content: data }));
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const result = await siteApi.postBlog(formData, token);
            setFormData(() => ({
                title: '',
                content: '',
                tags: {},
            }))
            setLoaded(() => false)
            setErrors(()=>[])
            console.log("success, result is", result);
        }
        catch (errorMessages) {
            // console.log("err>>>>>>>>>>>>", errorMessages);
            setErrors(() => errorMessages);
        }
    }

    return (
        <div className="BlogPost">
            <form
                className="BlogPost-form"
                onSubmit={handleSubmit}
            >
                <label>
                    Title:
                    <input
                        type="text"
                        value={formData.title}
                        onChange={handleChange}
                        name="title"
                    />
                </label>
                <CKEditor
                    editor={ClassicEditor}
                    data={formData.content}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        handleContentChange(data)
                    }}
                />
                <AlertMsg msgs={errors} />
                <button>Post</button>
            </form>
        </div>
    )
}

export default BlogPost;

// {
// 	"title":"test",
// 	"content":"test content",
// 	"tags": {
// 			"tagList":["a","b"]
// 	}
// }