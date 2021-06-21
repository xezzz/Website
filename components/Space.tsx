


export function Space(props: {x?: number, y?:number}) {
    return <div style={{marginTop: props.y ?? 0, marginRight: props.x ?? 0}} />
}