#!/usr/bin/env ruby

# Random name generator by Michael Geary
# Free beer and free speech license. Enjoy!

require 'rubygems'

require 'builder'
require 'json'

class Array
	def rand
		self[ ( Kernel.rand * self.length ).to_i ]
	end
end

class Fixnum
	def digits
		tens = 10 ** self
		( rand * tens + tens ).to_i.to_s.slice( 1, self )
	end
end

def readJSON( filename )
	File.open( filename, 'r' ) { |f| JSON.parse(f.read) }
end

def writeJSON( filename, value )
	File.open( filename, 'w' ) { |f| f.puts value.to_json }
end

def writeXML( filename, names )
	xml = Builder::XmlMarkup.new :target => File.open(filename,'w'), :indent => 4
	xml.instruct! :xml, :version => '1.0', :encoding => 'UTF-8'
	xml.names {
		names.each { |name|
			xml.name {
				xml.first name[:first]
				xml.last name[:last]
				xml.street name[:street]
				xml.city name[:city]
				xml.state name[:state]
				xml.zip name[:zip]
				#xml.phone name[:phone]
			}
		}
	}
end

def load( file )
	File.open(file).readlines.map { |line| line.chomp }
end

def make( count )
	jsonfile = "names-#{count}.json"
	xmlfile = "names-#{count}.xml"
	print "Making #{jsonfile} and #{xmlfile}\n"
	first = load('dist.male.first') + load('dist.female.first')
	last = load('dist.all.last')
	streetsuffix = load('street.suffixes')
	citysuffix = load('city.suffixes')
	
	names = []
	count.times {
		names.push({
			:first => first.rand,
			:last => last.rand,
			:street => "#{(rand*9999+1).to_i} #{last.rand} #{streetsuffix.rand}",
			:city => last.rand + ( rand < 0.5 ? ' ' + citysuffix.rand : '' ),
			:state => last.rand[0..1].upcase,
			:zip => 5.digits,
			#:phone => "#{3.digits}-#{3.digits}-#{4.digits}",
		})
	}
	
	writeJSON( jsonfile, { :names => names } )
	writeXML( xmlfile, names )
end

make 10
make 100
make 1000
make 10000

print "Done!\n"
