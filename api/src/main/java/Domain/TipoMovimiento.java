package Domain;

public class TipoMovimiento {
    
    private int id;
    private String descripcion;
    
    public TipoMovimiento(){}
    
    // ingreso o engreso

    public TipoMovimiento(int id, String descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    } 

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
