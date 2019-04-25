//	https://jsbin.com/nubugunoro/1/edit?js,console,output

class ExampleComponent extends React.Component
{
	static defaultProps = {
		Title: "foo1"
	};
	constructor( props )
	{
		super( props );
		this.Title = ExampleComponent.defaultProps.Title;
	}
	clickHandler()
	{
		console.log( '1. Click fired!' )
	}
	ExtRender()
	{
		return (
			<div>{this.Title}</div>
		)
	}
	render()
	{
		return (
			<div>
				<button onClick={this.clickHandler.bind( this )}>
					{this.Title}
				</button>
				{this.ExtRender()}
			</div>
		)
	}
}

class RenderComponent extends ExampleComponent
{
	static defaultProps = {
		Title: "foo 2"
	};
	constructor( props )
	{
		super( props );
		this.Title = RenderComponent.defaultProps.Title;
	}
	ExtRender()
	{
		return (
			<div style={{ color: 'blue' }}>{this.Title}</div>
		)
	}
}

ReactDOM.render(
	<RenderComponent />,
	document.getElementById( 'app' )
)