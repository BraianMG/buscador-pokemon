const Alert = props => {
  
    const { alert } = props;

    return (
        <>
            {alert.active ? 
                <p data-cy="alert" className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded max-w-lg mx-auto mt-6 text-center">
                    <strong class="font-bold">Error: </strong>
                    <span class="block sm:inline">{alert.msg}</span>
                </p>
                : ""
            }
        </>
    );
  }
  
  export default Alert;
  