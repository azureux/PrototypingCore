import React, { Component } from 'react';
import logo from './logo.svg';
import LeftNav from './components/left-nav/left-nav.js';
import './App.css';
//import { Button, ButtonAppearance } from "@microsoft/fast-components-react-msft";

export default class App extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {};

		this.LeftNavOpened = false;

		this.TEST_ButtonTest = "React";
		this.TEST_ProjectName = "Project \"Acuity\"";
		this.HandleClick = this.OnClick_TestingClicks.bind( this );

		return;
	};
	OnClick_TestingClicks( proxyEvent )
	{
		console.debug("OnClick_TestingClicks", proxyEvent);
		return;
	};
	render()
	{
		//	FAST-DNA button - <Button appearance={ButtonAppearance.primary} onClick={this.HandleClick}>Click me!</Button>
		return (
			<div className="App">
				<header>
					<div className="brand-panel" onClick={this.HandleClick}>
						<div>Preview</div>
						<div>Microsoft Azure</div>
					</div>	
					<div className="search-panel">Search</div>
					<div className="tools-panel">
						<div>Console</div>
						<div>directory switcher</div>
						<div>Notifications</div>
						<div>help</div>
						<div>feedback</div>
					</div>
					<div className="users-panel">Acounts</div>
				</header>
				<main>
					<div className="nav-panel-default">
						<LeftNav opened={this.LeftNavOpened}/>
					</div>
					<div className="extension-panel-default">
						<img className="test-logo" src={logo} alt={logo} />
						<p>Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus, mollis platea pharetra venenatis mauris enim parturient ornare, diam lacinia sollicitudin nascetur lobortis sociis cras. Eleifend venenatis sagittis leo accumsan hendrerit a, fames facilisis metus feugiat quam, faucibus dictumst interdum posuere class. Magna feugiat sem cum tellus etiam inceptos sapien cubilia rhoncus vehicula, mus ligula imperdiet sagittis pharetra tempus placerat viverra class habitasse risus, auctor ut duis hendrerit aptent pretium justo felis nulla.</p> <p>Class mus purus auctor pellentesque lacus varius habitasse nec, mauris bibendum facilisi malesuada inceptos egestas potenti phasellus penatibus, ligula leo curae sodales nostra placerat porta. Lectus suspendisse diam malesuada per sapien ultrices libero tempus dignissim, tempor platea vivamus phasellus sem montes a eget aptent mollis, parturient congue dui commodo habitant sagittis erat dapibus. Lacus nostra eget turpis suspendisse nascetur at etiam quis dignissim iaculis neque, gravida taciti id sapien ligula eleifend fames ridiculus litora vehicula. Mauris eu pretium et fames vivamus sollicitudin magnis iaculis consequat ligula mattis, massa faucibus vestibulum at penatibus interdum dui ornare hendrerit vehicula. Duis aenean nam euismod risus pulvinar neque lacinia pellentesque habitant venenatis, in dictum eros a convallis parturient potenti placerat penatibus nisl sagittis, congue ac dui mauris facilisi dictumst urna taciti diam.</p> <p>Mi aliquet magnis posuere eget vehicula vitae, ultrices augue pulvinar iaculis montes luctus ut, eros primis neque justo scelerisque. Eget volutpat parturient risus montes cum arcu lobortis velit, est ridiculus nec neque eros lacus accumsan semper, sem diam commodo ullamcorper magna quam nunc. Tincidunt tortor nullam sollicitudin proin ac erat aliquet fusce tempus nibh pulvinar ultrices habitasse, imperdiet habitant laoreet ut eros integer quisque facilisis fames iaculis neque natoque. Cubilia morbi est facilisi scelerisque orci egestas mattis laoreet sed iaculis maecenas sollicitudin sociis parturient venenatis, fusce condimentum augue lacinia etiam ridiculus sociosqu pulvinar tortor erat odio varius nisl praesent.</p> <p>Dignissim facilisi consequat quis eget vehicula dui diam proin odio augue, risus suscipit condimentum rutrum torquent curae ac nisl blandit, mollis praesent mattis facilisis tellus conubia varius mus in. Duis lectus aenean nisl quisque dui velit nec, neque enim taciti commodo conubia quis odio, tincidunt augue metus eget morbi mi. Justo sed in habitant molestie sagittis parturient eros a turpis viverra convallis torquent, mattis mollis himenaeos fusce eget nisi dui mauris vel donec euismod. Porttitor arcu curae hendrerit maecenas inceptos, luctus congue quisque auctor platea euismod, sollicitudin neque lacus magna.</p> <p>Dignissim convallis mollis quis orci molestie lacus neque, dui est sollicitudin euismod dictum malesuada gravida, integer nec velit litora donec hendrerit. Non luctus mattis lectus taciti purus egestas diam commodo eget, scelerisque sagittis posuere rutrum aenean himenaeos metus vehicula, maecenas nibh quisque hac quis curabitur varius aliquet.</p> <p>Nostra dui sociis massa tincidunt ultrices curae ridiculus taciti commodo tempus, accumsan inceptos donec potenti posuere non class luctus euismod lobortis sapien, diam imperdiet hac malesuada magnis orci interdum egestas felis. Tincidunt neque volutpat rutrum ad odio ridiculus dapibus mollis, facilisis litora sapien aliquam sodales dui hendrerit, lobortis facilisi aenean fringilla natoque euismod vitae. Sollicitudin tristique elementum mi vehicula vel nulla ultrices, curabitur laoreet ultricies tempor cubilia placerat, vitae mus lectus porttitor netus scelerisque.</p> <p>Tempor venenatis ridiculus nascetur congue curae molestie mauris sociosqu gravida, quam blandit litora mollis consequat senectus potenti ornare iaculis bibendum, vehicula lacus auctor feugiat aliquam pretium dictum vivamus. Ad ut gravida venenatis eleifend scelerisque placerat class habitant, accumsan cum id ultrices sodales curabitur sociosqu sem, et pharetra est rutrum mattis conubia ligula. Platea dignissim eleifend cum molestie fames proin purus, est pretium faucibus cras elementum id accumsan sagittis, placerat quam arcu scelerisque a tortor.</p> <p>Sagittis dictum tristique consequat gravida posuere fermentum nunc, commodo dictumst massa vestibulum elementum pharetra vehicula, eget donec sodales condimentum aliquet habitant. Massa ante pellentesque in convallis vestibulum sociosqu eleifend, non natoque facilisi habitasse bibendum etiam condimentum, nisi sollicitudin vehicula ultricies euismod parturient. Neque id himenaeos lacinia cras natoque ultricies netus iaculis turpis aptent, posuere urna tempor nascetur risus convallis egestas laoreet elementum.</p> <p>Purus faucibus leo vivamus orci odio bibendum himenaeos cubilia cursus, curabitur netus etiam dis rutrum aenean feugiat diam curae iaculis, luctus parturient magnis ad mus posuere venenatis fringilla. Felis dignissim ad pellentesque tellus per eros nullam varius malesuada imperdiet, est suspendisse tempus pulvinar vel convallis donec etiam ut integer aliquet, elementum pharetra dis nisi iaculis fringilla libero semper lobortis. Himenaeos varius turpis vulputate nullam consequat cum odio suspendisse neque, condimentum nulla volutpat arcu tempus libero suscipit malesuada.</p> <p>Parturient pellentesque malesuada mollis cum quisque integer metus sociis, eros sagittis congue mus platea nibh vehicula curabitur porttitor, aliquam habitant egestas commodo ornare imperdiet ridiculus. Vel per parturient venenatis mollis varius ridiculus placerat nec conubia convallis taciti nisl suspendisse nostra semper, ultrices neque scelerisque diam mi non bibendum ad gravida fames massa dui est. Augue praesent aptent lectus semper bibendum arcu molestie viverra, vivamus hac malesuada conubia dis erat.</p>
						<p>Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus, mollis platea pharetra venenatis mauris enim parturient ornare, diam lacinia sollicitudin nascetur lobortis sociis cras. Eleifend venenatis sagittis leo accumsan hendrerit a, fames facilisis metus feugiat quam, faucibus dictumst interdum posuere class. Magna feugiat sem cum tellus etiam inceptos sapien cubilia rhoncus vehicula, mus ligula imperdiet sagittis pharetra tempus placerat viverra class habitasse risus, auctor ut duis hendrerit aptent pretium justo felis nulla.</p> <p>Class mus purus auctor pellentesque lacus varius habitasse nec, mauris bibendum facilisi malesuada inceptos egestas potenti phasellus penatibus, ligula leo curae sodales nostra placerat porta. Lectus suspendisse diam malesuada per sapien ultrices libero tempus dignissim, tempor platea vivamus phasellus sem montes a eget aptent mollis, parturient congue dui commodo habitant sagittis erat dapibus. Lacus nostra eget turpis suspendisse nascetur at etiam quis dignissim iaculis neque, gravida taciti id sapien ligula eleifend fames ridiculus litora vehicula. Mauris eu pretium et fames vivamus sollicitudin magnis iaculis consequat ligula mattis, massa faucibus vestibulum at penatibus interdum dui ornare hendrerit vehicula. Duis aenean nam euismod risus pulvinar neque lacinia pellentesque habitant venenatis, in dictum eros a convallis parturient potenti placerat penatibus nisl sagittis, congue ac dui mauris facilisi dictumst urna taciti diam.</p> <p>Mi aliquet magnis posuere eget vehicula vitae, ultrices augue pulvinar iaculis montes luctus ut, eros primis neque justo scelerisque. Eget volutpat parturient risus montes cum arcu lobortis velit, est ridiculus nec neque eros lacus accumsan semper, sem diam commodo ullamcorper magna quam nunc. Tincidunt tortor nullam sollicitudin proin ac erat aliquet fusce tempus nibh pulvinar ultrices habitasse, imperdiet habitant laoreet ut eros integer quisque facilisis fames iaculis neque natoque. Cubilia morbi est facilisi scelerisque orci egestas mattis laoreet sed iaculis maecenas sollicitudin sociis parturient venenatis, fusce condimentum augue lacinia etiam ridiculus sociosqu pulvinar tortor erat odio varius nisl praesent.</p> <p>Dignissim facilisi consequat quis eget vehicula dui diam proin odio augue, risus suscipit condimentum rutrum torquent curae ac nisl blandit, mollis praesent mattis facilisis tellus conubia varius mus in. Duis lectus aenean nisl quisque dui velit nec, neque enim taciti commodo conubia quis odio, tincidunt augue metus eget morbi mi. Justo sed in habitant molestie sagittis parturient eros a turpis viverra convallis torquent, mattis mollis himenaeos fusce eget nisi dui mauris vel donec euismod. Porttitor arcu curae hendrerit maecenas inceptos, luctus congue quisque auctor platea euismod, sollicitudin neque lacus magna.</p> <p>Dignissim convallis mollis quis orci molestie lacus neque, dui est sollicitudin euismod dictum malesuada gravida, integer nec velit litora donec hendrerit. Non luctus mattis lectus taciti purus egestas diam commodo eget, scelerisque sagittis posuere rutrum aenean himenaeos metus vehicula, maecenas nibh quisque hac quis curabitur varius aliquet.</p> <p>Nostra dui sociis massa tincidunt ultrices curae ridiculus taciti commodo tempus, accumsan inceptos donec potenti posuere non class luctus euismod lobortis sapien, diam imperdiet hac malesuada magnis orci interdum egestas felis. Tincidunt neque volutpat rutrum ad odio ridiculus dapibus mollis, facilisis litora sapien aliquam sodales dui hendrerit, lobortis facilisi aenean fringilla natoque euismod vitae. Sollicitudin tristique elementum mi vehicula vel nulla ultrices, curabitur laoreet ultricies tempor cubilia placerat, vitae mus lectus porttitor netus scelerisque.</p> <p>Tempor venenatis ridiculus nascetur congue curae molestie mauris sociosqu gravida, quam blandit litora mollis consequat senectus potenti ornare iaculis bibendum, vehicula lacus auctor feugiat aliquam pretium dictum vivamus. Ad ut gravida venenatis eleifend scelerisque placerat class habitant, accumsan cum id ultrices sodales curabitur sociosqu sem, et pharetra est rutrum mattis conubia ligula. Platea dignissim eleifend cum molestie fames proin purus, est pretium faucibus cras elementum id accumsan sagittis, placerat quam arcu scelerisque a tortor.</p> <p>Sagittis dictum tristique consequat gravida posuere fermentum nunc, commodo dictumst massa vestibulum elementum pharetra vehicula, eget donec sodales condimentum aliquet habitant. Massa ante pellentesque in convallis vestibulum sociosqu eleifend, non natoque facilisi habitasse bibendum etiam condimentum, nisi sollicitudin vehicula ultricies euismod parturient. Neque id himenaeos lacinia cras natoque ultricies netus iaculis turpis aptent, posuere urna tempor nascetur risus convallis egestas laoreet elementum.</p> <p>Purus faucibus leo vivamus orci odio bibendum himenaeos cubilia cursus, curabitur netus etiam dis rutrum aenean feugiat diam curae iaculis, luctus parturient magnis ad mus posuere venenatis fringilla. Felis dignissim ad pellentesque tellus per eros nullam varius malesuada imperdiet, est suspendisse tempus pulvinar vel convallis donec etiam ut integer aliquet, elementum pharetra dis nisi iaculis fringilla libero semper lobortis. Himenaeos varius turpis vulputate nullam consequat cum odio suspendisse neque, condimentum nulla volutpat arcu tempus libero suscipit malesuada.</p> <p>Parturient pellentesque malesuada mollis cum quisque integer metus sociis, eros sagittis congue mus platea nibh vehicula curabitur porttitor, aliquam habitant egestas commodo ornare imperdiet ridiculus. Vel per parturient venenatis mollis varius ridiculus placerat nec conubia convallis taciti nisl suspendisse nostra semper, ultrices neque scelerisque diam mi non bibendum ad gravida fames massa dui est. Augue praesent aptent lectus semper bibendum arcu molestie viverra, vivamus hac malesuada conubia dis erat.</p>
						<p>Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus, mollis platea pharetra venenatis mauris enim parturient ornare, diam lacinia sollicitudin nascetur lobortis sociis cras. Eleifend venenatis sagittis leo accumsan hendrerit a, fames facilisis metus feugiat quam, faucibus dictumst interdum posuere class. Magna feugiat sem cum tellus etiam inceptos sapien cubilia rhoncus vehicula, mus ligula imperdiet sagittis pharetra tempus placerat viverra class habitasse risus, auctor ut duis hendrerit aptent pretium justo felis nulla.</p> <p>Class mus purus auctor pellentesque lacus varius habitasse nec, mauris bibendum facilisi malesuada inceptos egestas potenti phasellus penatibus, ligula leo curae sodales nostra placerat porta. Lectus suspendisse diam malesuada per sapien ultrices libero tempus dignissim, tempor platea vivamus phasellus sem montes a eget aptent mollis, parturient congue dui commodo habitant sagittis erat dapibus. Lacus nostra eget turpis suspendisse nascetur at etiam quis dignissim iaculis neque, gravida taciti id sapien ligula eleifend fames ridiculus litora vehicula. Mauris eu pretium et fames vivamus sollicitudin magnis iaculis consequat ligula mattis, massa faucibus vestibulum at penatibus interdum dui ornare hendrerit vehicula. Duis aenean nam euismod risus pulvinar neque lacinia pellentesque habitant venenatis, in dictum eros a convallis parturient potenti placerat penatibus nisl sagittis, congue ac dui mauris facilisi dictumst urna taciti diam.</p> <p>Mi aliquet magnis posuere eget vehicula vitae, ultrices augue pulvinar iaculis montes luctus ut, eros primis neque justo scelerisque. Eget volutpat parturient risus montes cum arcu lobortis velit, est ridiculus nec neque eros lacus accumsan semper, sem diam commodo ullamcorper magna quam nunc. Tincidunt tortor nullam sollicitudin proin ac erat aliquet fusce tempus nibh pulvinar ultrices habitasse, imperdiet habitant laoreet ut eros integer quisque facilisis fames iaculis neque natoque. Cubilia morbi est facilisi scelerisque orci egestas mattis laoreet sed iaculis maecenas sollicitudin sociis parturient venenatis, fusce condimentum augue lacinia etiam ridiculus sociosqu pulvinar tortor erat odio varius nisl praesent.</p> <p>Dignissim facilisi consequat quis eget vehicula dui diam proin odio augue, risus suscipit condimentum rutrum torquent curae ac nisl blandit, mollis praesent mattis facilisis tellus conubia varius mus in. Duis lectus aenean nisl quisque dui velit nec, neque enim taciti commodo conubia quis odio, tincidunt augue metus eget morbi mi. Justo sed in habitant molestie sagittis parturient eros a turpis viverra convallis torquent, mattis mollis himenaeos fusce eget nisi dui mauris vel donec euismod. Porttitor arcu curae hendrerit maecenas inceptos, luctus congue quisque auctor platea euismod, sollicitudin neque lacus magna.</p> <p>Dignissim convallis mollis quis orci molestie lacus neque, dui est sollicitudin euismod dictum malesuada gravida, integer nec velit litora donec hendrerit. Non luctus mattis lectus taciti purus egestas diam commodo eget, scelerisque sagittis posuere rutrum aenean himenaeos metus vehicula, maecenas nibh quisque hac quis curabitur varius aliquet.</p> <p>Nostra dui sociis massa tincidunt ultrices curae ridiculus taciti commodo tempus, accumsan inceptos donec potenti posuere non class luctus euismod lobortis sapien, diam imperdiet hac malesuada magnis orci interdum egestas felis. Tincidunt neque volutpat rutrum ad odio ridiculus dapibus mollis, facilisis litora sapien aliquam sodales dui hendrerit, lobortis facilisi aenean fringilla natoque euismod vitae. Sollicitudin tristique elementum mi vehicula vel nulla ultrices, curabitur laoreet ultricies tempor cubilia placerat, vitae mus lectus porttitor netus scelerisque.</p> <p>Tempor venenatis ridiculus nascetur congue curae molestie mauris sociosqu gravida, quam blandit litora mollis consequat senectus potenti ornare iaculis bibendum, vehicula lacus auctor feugiat aliquam pretium dictum vivamus. Ad ut gravida venenatis eleifend scelerisque placerat class habitant, accumsan cum id ultrices sodales curabitur sociosqu sem, et pharetra est rutrum mattis conubia ligula. Platea dignissim eleifend cum molestie fames proin purus, est pretium faucibus cras elementum id accumsan sagittis, placerat quam arcu scelerisque a tortor.</p> <p>Sagittis dictum tristique consequat gravida posuere fermentum nunc, commodo dictumst massa vestibulum elementum pharetra vehicula, eget donec sodales condimentum aliquet habitant. Massa ante pellentesque in convallis vestibulum sociosqu eleifend, non natoque facilisi habitasse bibendum etiam condimentum, nisi sollicitudin vehicula ultricies euismod parturient. Neque id himenaeos lacinia cras natoque ultricies netus iaculis turpis aptent, posuere urna tempor nascetur risus convallis egestas laoreet elementum.</p> <p>Purus faucibus leo vivamus orci odio bibendum himenaeos cubilia cursus, curabitur netus etiam dis rutrum aenean feugiat diam curae iaculis, luctus parturient magnis ad mus posuere venenatis fringilla. Felis dignissim ad pellentesque tellus per eros nullam varius malesuada imperdiet, est suspendisse tempus pulvinar vel convallis donec etiam ut integer aliquet, elementum pharetra dis nisi iaculis fringilla libero semper lobortis. Himenaeos varius turpis vulputate nullam consequat cum odio suspendisse neque, condimentum nulla volutpat arcu tempus libero suscipit malesuada.</p> <p>Parturient pellentesque malesuada mollis cum quisque integer metus sociis, eros sagittis congue mus platea nibh vehicula curabitur porttitor, aliquam habitant egestas commodo ornare imperdiet ridiculus. Vel per parturient venenatis mollis varius ridiculus placerat nec conubia convallis taciti nisl suspendisse nostra semper, ultrices neque scelerisque diam mi non bibendum ad gravida fames massa dui est. Augue praesent aptent lectus semper bibendum arcu molestie viverra, vivamus hac malesuada conubia dis erat.</p>
					</div>
					<div className="context-panel-default">
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
					</div>
				</main>
			</div>
		);
	}
}