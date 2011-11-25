group 'styles' do
  guard 'sass', :output => 'Resources', :output_format => 'jss' do
    watch(%r{^stylesheets/.+\.sass}) { puts 'compiling sass' }
    watch(%r{^stylesheets/.+\.scss}) { puts 'compiling scss' }
  end
end

guard 'coffeescript', :input => 'app', :output => 'Resources'
