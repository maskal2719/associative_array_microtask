type FooterPropsType = {
    title: string
}
export const Footer = (props: FooterPropsType) => {
    return (
        <>{props.title}</>
    )
}