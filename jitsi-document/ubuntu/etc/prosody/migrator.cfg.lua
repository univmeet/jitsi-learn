-- 数据存储目录
local data_path = '/var/lib/prosody';

input {
	type = "prosody_files";
	path = data_path;
}

output {
	type = "prosody_sql";
	driver = "SQLite3";
	database = data_path.."/prosody.sqlite";
}

--[[

input {
	type = "prosody_files";
	path = data_path;
}

output {
	type = "prosody_sql";
	driver = "SQLite3";
	database = data_path.."/prosody.sqlite";
}

]]
