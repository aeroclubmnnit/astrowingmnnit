import { useInput } from 'react-admin';
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize";
Quill.register("modules/imageResize", ImageResize);
const ImageFormatAttributesList = [
    'alt',
    'height',
    'width',
    'style'
];

const BaseImageFormat = Quill.import('formats/image');
class ImageFormat extends BaseImageFormat {
    static formats(domNode) {
        return ImageFormatAttributesList.reduce(function (formats, attribute) {
            if (domNode.hasAttribute(attribute)) {
                formats[attribute] = domNode.getAttribute(attribute);
            }
            return formats;
        }, {});
    }
    format(name, value) {
        if (ImageFormatAttributesList.indexOf(name) > -1) {
            if (value) {
                this.domNode.setAttribute(name, value);
            } else {
                this.domNode.removeAttribute(name);
            }
        } else {
            super.format(name, value);
        }
    }
}

Quill.register(ImageFormat, true);

const RichTextQuill = props => {
    const {
        input: { name, onChange, ...rest },
        meta: { touched, error },
        isRequired
    } = useInput(props);

    return (
        <div className='my-3'>
            <label htmlFor="">{props.label}  *{" "}</label>
            <ReactQuill
                modules={{
                    toolbar: [
                        ["bold", "italic", "underline", "strike"],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ size: ["small", false, "large", "huge"] }],
                        [{ font: [] }],
                        [{ color: [] }, { background: [] }],
                        [{ list: "ordered" }, { list: "bullet" }],
                        [{ script: "sub" }, { script: "super" }],
                        ["blockquote", "code-block"],
                        [{ indent: "-1" }, { indent: "+1" }],
                        [{ direction: "rtl" }],
                        [{ align: [] }],
                        ["link", "video"],
                        ["clean"],
                    ],
                    imageResize: {
                        displayStyles: {
                            backgroundColor: "black",
                            border: "none",
                            color: "white",
                        },
                        modules: ["Resize", "DisplaySize", "Toolbar"],
                    },
                }}
                value={name}
                onChange={onChange}
                required={isRequired}
                label={props.label}
                error={!!(touched && error)}
                helperText={touched && error}
                {...rest}
            />
        </div>
    );
};

export default RichTextQuill