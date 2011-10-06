To generate the names-nnnn.json and names.nnnn.xml files, run:

ruby makenames.rb

The builder and json gems are required:

gem install builder json

Original data sources:

First and last names:

http://www.census.gov/genealogy/names/dist.female.first
http://www.census.gov/genealogy/names/dist.male.first
http://www.census.gov/genealogy/names/dist.all.last

City and street suffixes:

http://www.usps.com/ncsc/lookups/abbr_suffix.txt
