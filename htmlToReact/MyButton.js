function MyButton(props){

    const[isClicked,setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? '클릭되었다🤗' : '눌러보세요🫵'
    )
}
// render함수를 사용하여 리액트 컴포넌트를 돔 컨테이너에 랜더링
const domContainer= document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton),domContainer);