
import './FilterGroup .css';

export default function FilterGroup ({listaOpcos,Radio,titulo}) {
    return (
               <>
                
                   
                {Radio != true ? 
                    <div className='cont-Categorias' >
                        <h5 className="subtitulos">{titulo}</h5>
                    {
                        listaOpcos.map((opcao, index) => {
                            return (
                                <div key={index}>
                                    <input type="checkbox" value={opcao.value} name={opcao.value} id={opcao.value} />
                                    <label htmlFor={opcao.value}>{opcao.text}</label>
                                </div>
                            )
                    })
                        }
                    </div>
                :
                    <div className='cont-Categorias'>
                        <h5 className="subtitulos">{titulo}</h5>
                        {
                            
                            listaOpcos.map((opcao, index) => {
                                return(
                                <div key={index}>
                                    <input type="radio" value={opcao.value} name={titulo} id={opcao.text} style={{ border: "1px solid black" }} />
                                    <label htmlFor={opcao.text}>{opcao.text}</label>
                                </div>)
                            })
                        }

                    </div>}
                   
               </>
    );
}
