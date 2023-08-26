import PropTypes from 'prop-types';
export const Title =({text})=>{
    return (
        <>
        <h1>{text}</h1>
        </>
    )
};
Title.PropTypes = {
    text:PropTypes.string.isRequired

}

Title.defaultProps ={
    text:'Bienvenidos'
}