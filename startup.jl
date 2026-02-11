# Este archivo lanzará Pluto cuando lo ejecutes en Binder

using Pkg
Pkg.activate(".")

# Asegurarse que Pluto esté instalado
if !haskey(Pkg.project().dependencies, "Pluto")
    @info "Instalando Pluto..."
    Pkg.add("Pluto")
end

if !haskey(Pkg.project().dependencies, "PlutoUI")
    @info "Instalando PlutoUI..."
    Pkg.add("PlutoUI")
end

using Pluto

# Iniciar Pluto con la configuración correcta para Binder
@info "Iniciando servidor Pluto..."
Pluto.run(
    host="0.0.0.0",
    port=1234,
    launch_browser=false,
    require_secret_for_access=false,
    require_secret_for_open_links=false
)