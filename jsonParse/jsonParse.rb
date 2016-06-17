require 'json'
require 'awesome_print'
file = File.read('aapl.json')

puts 'export default ['
j = 1

Dir.glob("../data/*.json") do |my_text_file|
  data_hash = JSON.parse(File.read(my_text_file))

  exportHash = Hash.new
  print "\t"
  for i in 0..9 do
    puts "{"
    puts "\t\tid: " + j.to_s + ','
    j = j+1
    for x in 0..23
      field = data_hash['result']['rows'][i]['values'][x]['field']
      value = data_hash['result']['rows'][i]['values'][x]['value']

      if field == "issueid" then
        field = 'issueId'
      end
      print "\t\t" + field + ":\t"
      if value.is_a?String then value.delete! '\\' end
      if value.is_a?String or value.nil?
        puts '"' + value.to_s + '",'
      else
        puts value.to_s + ","
      end
    end
    print "\t},"
  end

end
puts ''
puts ']'
