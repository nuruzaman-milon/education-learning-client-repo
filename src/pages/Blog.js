import React from 'react';

const Blog = () => {
    return (
        <div className='w-[70%] mx-auto my-12'>
            <h1 className='font-bold text-4xl mb-12 text-center'>Featured Blogs</h1>
            <div className='bg-cyan-200 p-5 rounded-lg mb-6'>
                <h3 className='my-1 text-xl font-bold'># What is cors?</h3>
                <p>
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                </p>
            </div>

            <div className='bg-cyan-200 p-5 rounded-lg mb-6'>
                <h3 className='my-1 text-xl font-bold'># Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>
                    <strong>Easy sign-in with any platform:</strong> Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more. <br />
                    <strong>Flexible, drop-in UI: </strong> FirebaseUI provides a customizable, open source, drop-in auth solution that handles the UI flows for signing in users. The FirebaseUI Auth component implements best practices for authentication on mobile devices and websites, which can maximize sign-in and sign-up conversion for your app. <br />
                    <strong>Comprehensive security: </strong> Built by the same team that developed Google Sign-in, Smart Lock and Chrome Password Manager, Firebase security applies Google's internal expertise of managing one of the largest account databases in the world. <br />
                    <strong>Fast implementation: </strong> It can take months to set up your own auth system, and it requires an engineering team to maintain that system in the future. Set up the entire authentication system of your app in under 10 lines of code, even handling complex cases like account merging. <br />
                </p>
            </div>

            <div className='bg-cyan-200 p-5 rounded-lg mb-6'>
                <h3 className='my-1 text-xl font-bold'># How does the private route work?</h3>
                <p>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                    If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    Public and Private routes will also restrict accessing the previously visited routes using the browser back button after logout. I hope you have found this useful. Thank you for reading.
                </p>
            </div>

            <div className='bg-cyan-200 p-5 rounded-lg mb-6'>
                <h3 className='my-1 text-xl font-bold'># What is Node? How does Node work?</h3>
                <p>
                Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return. <br />
                In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead <br />
                While spawning threads incurs less memory and CPU overhead than forking processes, it can still be inefficient. The presence of a large number of threads can cause a heavily loaded system to spend precious cycles on thread scheduling and context switching, which adds latency and imposes limits on scalability and throughput.
                </p>
            </div>
        </div>
    );
};

export default Blog;