type Props = {
    cantidadTotal: number;
    totalPagar: number;
}
function ResumenCarrito(props: Props) {
  return (
    <div>
        <p>Cantidad Total: {props.cantidadTotal}</p>
        <p>Total a Pagar: ${props.totalPagar}</p>

    </div>
)
}

export default ResumenCarrito