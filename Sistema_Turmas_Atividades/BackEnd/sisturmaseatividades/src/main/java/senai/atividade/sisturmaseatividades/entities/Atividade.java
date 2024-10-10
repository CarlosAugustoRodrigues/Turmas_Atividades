package senai.atividade.sisturmaseatividades.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import senai.atividade.sisturmaseatividades.dtos.AtividadeRequest;

import java.time.Instant;
import java.time.temporal.ChronoUnit;

@Entity
@Table(name = "tb_atividades")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Atividade {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long numAtividade;
    private String descricao;
    private Long professorId;

    @ManyToOne
    @JsonIgnore
    private Turma turma;

    public Atividade(AtividadeRequest data, Long numAtividade, Turma turma) {
        setDescricao(data.descricao());
        setProfessorId(data.professor());
        setNumAtividade(numAtividade);
        setTurma(turma);
    }
}
