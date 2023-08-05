// A mock function to mimic making an async request for data
export function fetchAllPosts() {
  return new Promise(async(resolve) =>{
 const response= await fetch('http://localhost:8080/posts');
 const data=await response.json();
 resolve({data});
});
}

export function fetchAllPostsById(id) {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/posts/'+id) 
    const data = await response.json()
    resolve({data})
  }
  );
}