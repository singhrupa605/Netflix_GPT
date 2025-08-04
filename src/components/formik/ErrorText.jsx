

const ErrorText = ({children, className=""})=>
{
//    console.log(props.children)
    return(
        <div>
            <h4 className={`text-red-600 pt-2 ${className}`}>{children}</h4>
        </div>
    )
}

export default ErrorText