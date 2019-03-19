using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Script.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace market_place_scrub
{
	class Program
	{
		const string _azure_market_place_uri = "http://catalogapi.azure.com/offers/?api-version=2018-08-01-beta";
		const string _img_folder = "/mp-images/";
		const string _mp_data_file = "_mp_data.js";

		static void Main( string[] args )
		{
			Console.ForegroundColor = ConsoleColor.Blue;
			Console.WriteLine("Azure Market Place JSON Data Scrubber 1.0");
			Console.WriteLine("BEGIN");
			Console.ForegroundColor = ConsoleColor.White;

			// fetch the data dump
			WebClient c = new WebClient();

			// it's a string
			string _json_temp = c.DownloadString(new Uri(_azure_market_place_uri));

			// make a json object
			JObject _json = JObject.Parse(_json_temp);

			// get the items array
			JToken _items = _json[ "items" ];
			Console.WriteLine(_items.Count().ToString());

			// try to write it out
			const string obj_root = "const _market_place_data_scrubbed = [";
			const string obj_tail = "];";
			List<string> items_json_list = new List<string>();
			items_json_list.Add(obj_root);
			Random _r = new Random(1);

			foreach ( JToken _item in _items )
			{
				//	Console.WriteLine(_item[ "displayName" ]);
				//Console.WriteLine(_item[ "publisherDisplayName" ]);
				//Console.WriteLine(_item[ "summary" ]);
				//Console.WriteLine(_item[ "longSummary" ]);
				//Console.WriteLine(_item[ "description" ]);
				//Console.WriteLine(_item[ "categoryIds" ] );
				//Console.WriteLine(_item[ "iconFileUris" ]["large"] );
				//Console.WriteLine(_item[ "images"][0]["items"][3]["uri"] );

				StringBuilder sb = new StringBuilder();
				sb.Append("{ ");

				// displayname
				sb.Append("\"displayName\":");
				if ( _item[ "displayName" ] != null )
				{
					sb.Append("\"" + _item[ "displayName" ] + "\"");
				}
				else
				{
					sb.Append("undefined");
				}
				sb.Append(",");

				// publisher
				sb.Append("\"publisher\":");
				if ( _item[ "publisherDisplayName" ] != null )
				{
					sb.Append("\"" + _item[ "publisherDisplayName" ] + "\"");
				}
				else
				{
					sb.Append("undefined");
				}
				sb.Append(",");

				// summary
				sb.Append("\"summary\":");
				if ( _item[ "summary" ] != null )
				{
					sb.Append("\"" + _item[ "summary" ] + "\"");
				}
				else
				{
					sb.Append("undefined");
				}
				sb.Append(",");

				// _item[ "iconFileUris" ]["large"] 
				sb.Append("\"icon\":");
				if ( _item[ "iconFileUris" ]["large"] != null )
				{
					//	sb.Append("\"" + _item[ "iconFileUris" ]["large"] + "\"");

					using ( var webClient = new WebClient() )
					{
						// for base64 encoding downloaded images
						//byte[] imageBytes = webClient.DownloadData(_item[ "iconFileUris" ][ "large" ].ToString());
						//string _s = Convert.ToBase64String(imageBytes);
						//string _b64 = "data:image/jpeg;base64,";
						//string _final = _b64 + _s;
						//	Console.WriteLine("The base 64 string:\n   {0}{1}\n", _b64_data, s);


						// for writing to the filesytem, best approach given the problem
						// could be refactored for async/await and threading
						string[] _file_name = _item[ "iconFileUris" ][ "large" ].ToString().Split('.');
						string _folder_path = System.Environment.CurrentDirectory + _img_folder;

						if ( System.IO.Directory.Exists(_folder_path) == false )
						{
							System.IO.Directory.CreateDirectory(_folder_path);
						}

						string _file_path = _folder_path + _file_name[_file_name .Length-1] + ".jpg";

						if ( System.IO.File.Exists(_file_path) == false )
						{
							webClient.DownloadFile(_item[ "iconFileUris" ]["large"].ToString(), _file_path);
						}
						string _json_path = _img_folder + _file_name[_file_name .Length-1] + ".jpg";
						
						sb.Append("\"" + _json_path + "\"");
					}
				}
				else
				{
					sb.Append("undefined");
				}
				sb.Append(",");

				// has badge
				sb.Append("\"badge\":");
				double r_val = _r.NextDouble(); //	Console.WriteLine("r_val {0}", Math.Round(r_val).ToString());
				string hasBadge = (Math.Round(r_val) > 0.5 ) ? bool.TrueString.ToLowerInvariant() : bool.FalseString.ToLowerInvariant();
				sb.Append( hasBadge );
				sb.Append(",");

				// ratings
				sb.Append("\"rating\":");
				double rdm_rating_val = _r.Next(2, 4) + Math.Round(_r.NextDouble(),2);
				//	Console.WriteLine("rdm_rating_val {0}", Math.Round(rdm_rating_val).ToString());
				string rating_value = rdm_rating_val.ToString();
				sb.Append( rating_value );
				sb.Append(",");

				// rating count
				sb.Append("\"ratingCount\":");
				double rdm_count = _r.Next(1, 999);
				//	Console.WriteLine("rdm_count {0}", rdm_count.ToString());
				string rating_count_value = rdm_count.ToString();
				sb.Append( rating_count_value );
				//	sb.Append(",");

				// _item[ "images"][0]["items"][3]["uri"]
				//sb.Append("\"image\":");
				//if ( _item[ "images"][0]["items"][3]["uri"] != null )
				//{
				//	sb.Append("\"" + _item[ "images"][0]["items"][3]["uri"] + "\"");
				//}
				//else
				//{
				//	sb.Append("undefined");
				//}
				//sb.Append(",");

				//// categoryIds
				//sb.Append("\"categoryIds\":");
				//if ( _item[ "categoryIds" ] != null )
				//{
				//	sb.Append(_item[ "categoryIds" ]);
				//}
				//else
				//{
				//	sb.Append("undefined");
				//}
				//sb.Append(",");




				// longSummary
				//sb.Append("\"longSummary\":");
				//if ( _item[ "longSummary" ] != null )
				//{
				//	// HTML ENCODE???
				//	sb.Append("\"" + _item[ "longSummary" ] + "\"");
				//}
				//else
				//{
				//	sb.Append("undefined");
				//}
				//sb.Append(",");

				// description
				//sb.Append("\"description\":");
				//if ( _item[ "description" ] != null )
				//{
				//	// HTML ENCODE???
				//	sb.Append("\"" + _item[ "description" ] + "\"");
				//}
				//else
				//{
				//	sb.Append("undefined");
				//}
				//sb.Append(",");



				sb.Append("},");				
				items_json_list.Add(sb.ToString());
			}

			items_json_list.Add(obj_tail);

			string _data_file = System.Environment.CurrentDirectory + _img_folder + _mp_data_file;
			using (StreamWriter writer = new StreamWriter( _data_file, false))
			{
				foreach ( string s in items_json_list )
				{
					writer.WriteLine(s);
				}
			}

			Console.ForegroundColor = ConsoleColor.Red;
			Console.WriteLine("removing the images folder after running, don't include in GIT.");
			Console.ForegroundColor = ConsoleColor.Blue;
			Console.WriteLine("END");
			Console.ForegroundColor = ConsoleColor.White;
			return;
		}
	}
}
