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
      print "\t\t" + data_hash['result']['rows'][i]['values'][x]['field'] + ":\t"
      if data_hash['result']['rows'][i]['values'][x]['value'].is_a?String or data_hash['result']['rows'][i]['values'][x]['value'].nil?
        puts '"' + data_hash['result']['rows'][i]['values'][x]['value'].to_s + '",'
      else
        puts data_hash['result']['rows'][i]['values'][x]['value'].to_s + ","
      end
    end
    print "\t},"
  end

end
puts ''
puts ']'
