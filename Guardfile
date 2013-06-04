# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'compass' do
  watch(/^sass\/(.*)\.s[ac]ss/)
end

guard 'livereload' do
  watch(%r{views/.+\.(erb|haml|slim)$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{public/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html))).*}) { |m| "/assets/#{m[3]}" }
end
