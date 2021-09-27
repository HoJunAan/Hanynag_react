import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditorComponent = ({ value, onEditorChange }) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
            ["link", "image"],
            [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
            ["clean"],
        ],
    };

    const formats = [
        //'font',
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "align",
        "color",
        "background",
    ];

    return (
        <div style={{ height: "450px", width: "90%" }}>
            <ReactQuill
                style={{ height: "400px" }}
                theme="snow"
                modules={modules}
                formats={formats}
                value={value || ""}
                onChange={(content, delta, source, editor) =>
                    onEditorChange(editor.getHTML())
                }
            />
        </div>
    );
};
export default EditorComponent;
