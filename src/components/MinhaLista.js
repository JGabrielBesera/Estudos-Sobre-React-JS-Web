function MinhaLista({ xx }) {
    return (
        <>
        <h3>Lista de japoneses bombados</h3>
        {
            xx.map(
                (frase) => (
                    <p>{frase}</p>
                )

            )
        }
        </>
    )
}

export default MinhaLista