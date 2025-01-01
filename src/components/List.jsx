export default function List ({title, content, oncheck, id}) {
	return (
		<li>
			<h3>{title}</h3>
			<p>{content}</p>
			<span className="delete-btn" onClick={() => oncheck(id)}>Delete</span>
		</li>
	)
}