package senai.atividade.sisturmaseatividades.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import senai.atividade.sisturmaseatividades.dtos.ProfessorRequest;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_professores")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;
    private String email;
    private String senha;

    @OneToMany(mappedBy = "professor", fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Turma> turmas = new HashSet<>();

    public Professor(ProfessorRequest data) {
        setNome(data.nome());
        setEmail(data.email());
        setSenha(data.senha());
    }
}
