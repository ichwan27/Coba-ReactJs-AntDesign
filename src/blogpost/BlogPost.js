import { Component , Fragment } from 'react';
import './BlogPost.css';
import Post from '../post/Post.js';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post:[],
        formBlogPost: {
            id: 1,
            title: '',
            body:'',
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
        console.log(res.data);
            this.setState({
            post: res.data
            })
        })
    }

    postDataToAPI = () => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response=> response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state.formBlogPost)
        .then((res)=>{
            console.log(res.status);
            console.log(res);
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body:'',
                    userId: 1
                }
            })
        }, (err) => {
            console.log("ERROR: ", err);
        })
    }

    putDataToAPI = () => {
        // console.log(this.state.formBlogPost.id)
        axios.put(`https://jsonplaceholder.typicode.com/posts/${this.state.formBlogPost.id}`,this.state.formBlogPost)
        .then((res)=>{
            console.log(res);
            console.log(res.status);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body:'',
                    userId: 1
                }
            })
        })
    }

    handleRemove = (data) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${data}`)
        .then((res)=>{
            this.getPostAPI();
            console.log(res.status);
        })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        // console.log("form change", event.target);
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp =  new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew["id"] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        // console.log(event.target.name);
        this.setState({
            formBlogPost: formBlogPostNew
        }, () =>{
            console.log("value obj formBlogPost: ", this.state.formBlogPost)
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI();
        }else{
            this.postDataToAPI();
        }
        // console.log(this.state.formBlogPost);
    }
    componentDidMount(){
    this.getPostAPI();
    }

    render()
    {
        return(
            <Fragment>
                <h2>Blog Post</h2>
                <hr/>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="Add your title here!" onChange={this.handleFormChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="30" rows="10" placeholder="Add your description here!" onChange={this.handleFormChange}/>
                    <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate}/>
                    })
                }
            </Fragment>
        )
    }
}
export default BlogPost;