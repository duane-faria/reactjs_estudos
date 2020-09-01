import React from 'react';
function useRef() {
  // const video = React.useRef();

  // const [input, setInput] = React.useState('teste');

  // const [comments, setComments] = React.useState([
  //   'comment',
  //   'comment1',
  //   'comment2',
  // ]);

  // const inputElement = React.useRef();

  // React.useEffect(() => {
  //   console.log(video.current.currentTime);
  //   video.current.classList.add('newClass');
  // }, []);

  // return <video ref={video}></video>;

  // function handleClick() {
  //   setComments([...comments, input]);
  //   inputElement.current.focus();
  //   setInput('');
  // }

  // return (
  //   <div>
  //     <ul>
  //       {true && comments.map((comment) => <li key={comment}>{comment}</li>)}
  //     </ul>
  //     <input
  //       type="text"
  //       value={input}
  //       ref={inputElement}
  //       onChange={({ target }) => setInput(target.value)}
  //     />
  //     <button onClick={handleClick}>Add</button>
  //   </div>
  // );

  const [cart, setCart] = React.useState(0);

  const [notification, setNotification] = React.useState(null);

  const timeoutRef = React.useRef();

  function handleClick() {
    setCart(cart + 1);
    setNotification('Item adicionado ao carrinho');
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotification('');
    }, 2000);
  }

  return (
    <div>
      <p>{notification}</p>
      <button onClick={handleClick}>Add to cart {cart}</button>
    </div>
  );
}

export default useRef;
