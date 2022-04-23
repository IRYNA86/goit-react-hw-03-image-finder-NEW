import axios from 'axios';

const apiKey = '25360661-9d832ca480fd7eb90334f4453';

axios.defaults.baseURL = 'https://pixabay.com/api';


export const apiGallery = async (imageName) => {
   event.preventDefault();
    // const apiKey = '25360661-9d832ca480fd7eb90334f4453';
    const response = await axios.get(
        `/?key=${apiKey}&q=${imageName}&page=1&image_type=photo&orientation=horizontal&per_page=12`
    )
    
    return response.data;
    
}