require 'json'
require 'awesome_print'
file = File.read('aapl.json')

puts 'export default ['
j = 1

fieldsToInclude = ['issueid','companyname','ticker','price','sharesheld','numholders','industry']

Dir.glob("issues/*.json") do |my_text_file|
  data_hash = JSON.parse(File.read(my_text_file))
  exportHash = Hash.new
  print "\t"
  for i in 0..data_hash["result"]["totalrows"]-1 do

    puts "{"
    for x in 0..23
      field = data_hash['result']['rows'][i]['values'][x]['field']
      value = data_hash['result']['rows'][i]['values'][x]['value']

      if !fieldsToInclude.include? field then
        next
      end

      if field == "issueid" then
        field = 'id'
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

=begin
<value field="querydate">6/17/2016 2:27 AM</value>
<value field="companyid">45</value>
<value field="issueid">504167</value>
<value field="companyname">HOLOGIC INC</value>
<value field="issuetitle">COM</value>
<value field="isprimary">true</value>
<value field="activeonly">false</value>
<value field="ticker">HOLX</value>
<value field="exchangeid">474</value>
<value field="exchange">Other OTC</value>
<value field="cik">0000859737</value>
<value field="sic">3844</value>
<value field="sicdescription">
X-Ray Apparatus and Tubes and Related Irradiation Apparatus
</value>
<value field="industryid">812</value>
<value field="industry">Medical Equipment & Supplies</value>
<value field="sectorid">8</value>
<value field="sector">Healthcare</value>
<value field="street1">250 CAMPUS DRIVE</value>
<value field="street2"/>
<value field="city">MARLBOROUGH</value>
<value field="state">Massachusetts</value>
<value field="zip">01752</value>
<value field="country">UNITED STATES OF AMERICA</value>
<value field="phonecountrycode">1</value>
<value field="phoneareacode">508</value>
<value field="phonenumber">2632900</value>
<value field="sharesout">278829786</value>
<value field="sharesoutdate">4/27/2016 12:00 AM</value>
<value field="price">33.13</value>
<value field="pricedate">6/15/2016 12:00 AM</value>
<value field="sharesheld">263784559</value>
<value field="numholders">517</value>
<value field="numbernewholders">53</value>
<value field="numbuyers">230</value>
<value field="numsellers">222</value>
<value field="numbersellouts">54</value>
=end
