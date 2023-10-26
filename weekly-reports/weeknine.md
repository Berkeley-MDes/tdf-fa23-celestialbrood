# Project 3 : Crafting a Homework Helper for My 4th Grader

I've noticed my 4th grader grappling with new learning material lately. 
As a mom who's intrigued by employing technology as a supportive tool, 
I'm reminded of platforms like Khan Academy's homework tutor.
I'm considering how I might integrate an element from our Unii Learning Labs realm to offer 
homework assistance in a more tailored manner. The idea is to cater specifically to my 4th grader's assignments 
for this and the upcoming week. My hope is to present him with relevant and accessible learning materials, 
diverging from the randomness of generic Google or Bing searches.

For some context, over the past two years, we've been crafting the Unii Learning Labs, a edtech company exploring all the ways play = learning.  
My son is already acquainted with UniiFriends, one of our creations. I
thought reintroducing this character in a fresh format will not only be fun but also an effective learning aide. 

Here's my plan for the week:

## 1. Local Development
### Backend (API):
- I will be exploring **Flask**, a lightweight Python web framework. 
- I'll incorporate the `requests` library, hoping to connect with the zerowidth API or any other relevant external APIs.

### Frontend:
- My plan is to design a straightforward HTML/CSS/JS frontend that houses a chatbox.
- I aim to utilize AJAX (probably with jQuery) or the Fetch API (native JS) to establish communication between the frontend and backend.
- This is something I was struggling with the GMH Avatar and I hope to further investigate how to make this work in this format. 

## 2. Design Endpoints
- I'll craft an endpoint in my Flask setup, perhaps named `/get-homework-help`, which will pull data from zerowidth and relay necessary information to the frontend.

## 3. Web Hosting
- Given this is a personal experiment, I'll be looking into **free hosting platforms**.
- **Heroku** seems like a suitable choice, given its support for Python/Flask.

## 5. Secure the API
- I'll ensure that the endpoints are secure, even though this is a personal project.
- I'll be using **HTTPS** and, having read that platforms like Heroku offer SSL, that'll be a relief.
- I may consider introducing basic authentication or an API token system for added security _if I have time_ 

## 6. Deployment
- I'll test everything locally first. Once I'm satisfied with how it functions, I'll look into deploying it.
- I'll ensure I follow the required steps for deployment. I know Heroku often involves working with Git, so I'll be prepared for that.

## 7. Documentation
- Even if this remains a fun experiment, I think creating a README or a brief documentation page will help
- remember our journey and possibly assist others inspired by our endeavor.

## 8. Review & Adapt
- I'll gather feedback, particularly from my son, and refine the tool based on his experience.
- I'll stay alert for any glitches or issues and fix them as we go.

**Final Thoughts**: I'm excited about this journey! It's not just about aiding his learning but also about introducing him to technology's vast potential in creative and educational ways. 
The reintroduction of UniiFriend will hopefully bring familiarity and joy to his learning. 
