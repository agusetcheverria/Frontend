@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Editar Post</h1>

    <form action="{{ route('posts.update', $post->id) }}" method="POST">
        @csrf
        @method('PUT')
        
        <div class="form-group">
            <label for="title">Título</label>
            <input type="text" class="form-control" id="title" name="title" value="{{ $post->title }}" required>
        </div>
        
        <div class="form-group">
            <label for="content">Contenido</label>
            <textarea class="form-control" id="content" name="content" rows="5" required>{{ $post->content }}</textarea>
        </div>
        
        <button type="submit" class="btn btn-primary">Actualizar Post</button>
    </form>
</div>
@endsection