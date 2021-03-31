

function LoginPage(props) {


    return (
        <>
            <h2>Login page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur, cupiditate dignissimos distinctio eum ex excepturi expedita id in incidunt, inventore laborum maxime natus nemo nesciunt nostrum, obcaecati officia possimus praesentium provident quisquam quo rem rerum sequi similique sit soluta sunt tempore totam veritatis! Alias at dolores labore maxime nesciunt quisquam quos sed ullam ut vitae. A animi architecto beatae debitis dolores ducimus eligendi ex excepturi exercitationem in obcaecati officiis placeat quos rem rerum similique soluta tempora, tenetur unde, vero! Dolorem doloribus, dolorum inventore rem suscipit vel voluptatem. Dicta ea expedita hic modi natus nostrum odit, quos similique tenetur vero.</p>
            <button
                type="login"
                onClick={() => props.toggleSignedIn(!props.signedIn)}
            >
                {props.signedIn ? 'Uitloggen' : 'Inloggen'}
            </button>
        </>
    );
}

export default LoginPage;