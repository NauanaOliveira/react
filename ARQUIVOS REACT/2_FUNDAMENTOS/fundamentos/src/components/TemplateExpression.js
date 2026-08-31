const TemplateExpressions = () => {
    const name = 'Nauana'
    const name2 = 'Rogério'

    const data = {
        age : 23,
        job : "Programadores"
    };

    return (
        <div>
            <h1>Olá {name} e {name2}, tudo bem?</h1>
            <p>Vocês atuam como: {data.job}</p>
            <p>{5+7}</p>
            <p>{console.log('jcfsvfc')}</p>
        </div>
    )

};

export default TemplateExpressions
