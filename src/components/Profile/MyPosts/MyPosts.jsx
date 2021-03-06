import React from "react";
import myposts from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {} from "../../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../utilits/validators/validators";
import {makeField} from "../../common/AntD/MakeField";
import {Button, Input} from "antd";

const { TextArea } = Input;

const FormInput = makeField(Input);
const FormTextarea = makeField(TextArea)

const MaxLength10 = maxLengthCreator(10)
const MyPosts = (props) => {
    console.log("RENDER")

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    let postsElements = props.posts.map((post) => (
        <Post key={post.id} message={post.message} likesCount={post.likesCount}/>
    ));
    return (
        <div className={myposts.postsBlock}>
            My Posts
            <div>
                <div>
                    <AddPostFormRedux onSubmit={addNewPost}/>
                </div>
            </div>
            <div className={myposts.posts}>{postsElements}</div>
        </div>
    );
};

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormTextarea} name="newPostText" placeholder="Enter your massage"
                       validate={[required, MaxLength10]}/>
            </div>
            <div>
                <Button htmlType="submit">Send</Button>
            </div>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form: "PostAddMassageForm"})(AddPostForm)

export default MyPosts;
